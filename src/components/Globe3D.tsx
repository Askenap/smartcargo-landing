import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Sphere, Line, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Truck, Plane, TrainFront } from "lucide-react";

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function createArc(start: THREE.Vector3, end: THREE.Vector3, altitude: number): THREE.CubicBezierCurve3 {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  mid.normalize().multiplyScalar(start.length() + altitude);
  const cp1 = new THREE.Vector3().lerpVectors(start, mid, 0.33);
  cp1.normalize().multiplyScalar(start.length() + altitude * 0.6);
  const cp2 = new THREE.Vector3().lerpVectors(end, mid, 0.33);
  cp2.normalize().multiplyScalar(start.length() + altitude * 0.6);
  return new THREE.CubicBezierCurve3(start, cp1, cp2, end);
}

const locations = {
  eu: { lat: 50, lng: 10, label: "ЕС" },
  kz: { lat: 48.5, lng: 68, label: "Казахстан" },
  china: { lat: 35, lng: 105, label: "Китай" },
  turkey: { lat: 39, lng: 35, label: "Турция" },
  russia: { lat: 56, lng: 38, label: "Россия" },
  india: { lat: 20, lng: 78, label: "Индия" },
  uae: { lat: 24, lng: 54, label: "ОАЭ" },
};

const GLOBE_RADIUS = 2;

type TransportType = "truck" | "plane" | "train";

interface RouteData {
  from: keyof typeof locations;
  to: keyof typeof locations;
  color: string;
  speed: number;
  type: TransportType;
}

const routes: RouteData[] = [
  { from: "eu", to: "kz", color: "#3B82F6", speed: 0.3, type: "truck" },
  { from: "kz", to: "china", color: "#10B981", speed: 0.35, type: "train" },
  { from: "turkey", to: "kz", color: "#F59E0B", speed: 0.25, type: "plane" },
  { from: "russia", to: "kz", color: "#8B5CF6", speed: 0.28, type: "train" },
  { from: "india", to: "uae", color: "#14B8A6", speed: 0.3, type: "truck" },
  { from: "kz", to: "india", color: "#A855F7", speed: 0.26, type: "plane" },
  { from: "eu", to: "turkey", color: "#FBBF24", speed: 0.27, type: "train" },
  { from: "uae", to: "kz", color: "#22D3EE", speed: 0.31, type: "plane" },
  { from: "russia", to: "china", color: "#F43F5E", speed: 0.25, type: "train" },
];

function AnimatedRoute({ from, to, color, speed, type }: RouteData) {
  const groupRef = useRef<THREE.Group>(null);
  const progressRef = useRef(Math.random());

  const startPos = useMemo(() => latLngToVector3(locations[from].lat, locations[from].lng, GLOBE_RADIUS), [from]);
  const endPos = useMemo(() => latLngToVector3(locations[to].lat, locations[to].lng, GLOBE_RADIUS), [to]);
  const curve = useMemo(() => createArc(startPos, endPos, type === "plane" ? 0.8 : 0.5), [startPos, endPos, type]);
  const arcPoints = useMemo(() => curve.getPoints(80).map(p => [p.x, p.y, p.z] as [number, number, number]), [curve]);

  useFrame((_, delta) => {
    progressRef.current += delta * speed;
    if (progressRef.current > 1) progressRef.current = 0;
    const point = curve.getPoint(progressRef.current);
    if (groupRef.current) groupRef.current.position.copy(point);
  });

  const Icon = type === "plane" ? Plane : type === "train" ? TrainFront : Truck;

  return (
    <group>
      <Line points={arcPoints} color={color} lineWidth={1.5} transparent opacity={0.4} />
      <group ref={groupRef}>
        <Html center style={{ pointerEvents: "none" }}>
          <div
            className="rounded-full p-1 shadow-lg"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-3 h-3 text-white" />
          </div>
        </Html>
        <mesh>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </group>
    </group>
  );
}

function LocationMarker({ locKey }: { locKey: keyof typeof locations }) {
  const loc = locations[locKey];
  const pos = useMemo(() => latLngToVector3(loc.lat, loc.lng, GLOBE_RADIUS + 0.01), [loc.lat, loc.lng]);
  const isKZ = locKey === "kz";

  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[isKZ ? 0.06 : 0.04, 16, 16]} />
        <meshBasicMaterial color={isKZ ? "#3B82F6" : "#94A3B8"} />
      </mesh>
      <Html center style={{ pointerEvents: "none" }}>
        <div
          className={`whitespace-nowrap text-[9px] font-medium px-1.5 py-0.5 rounded-full ${isKZ ? "bg-blue-500 text-white" : "bg-white/80 text-slate-700"}`}
          style={{ transform: "translateY(-14px)" }}
        >
          {loc.label}
        </div>
      </Html>
    </group>
  );
}

function KazakhstanBorder() {
  // Real coordinates from OpenStreetMap (lat, lng)
  const borderCoords: [number, number][] = [
    [48.43, 46.49], [46.05, 49.89], [46.85, 51.24], [46.61, 52.80], [45.61, 52.47],
    [44.98, 49.81], [43.05, 51.13], [42.60, 52.39], [41.61, 52.27], [42.38, 54.22],
    [41.32, 55.99], [45.00, 55.99], [45.59, 58.59], [43.51, 62.00], [43.72, 65.00],
    [41.14, 66.71], [40.57, 68.58], [42.77, 71.27], [42.41, 73.48], [43.27, 74.20],
    [42.23, 80.27], [43.18, 80.81], [44.91, 79.88], [45.20, 82.56], [47.22, 83.03],
    [47.05, 85.53], [48.36, 85.71], [49.23, 87.32], [49.59, 85.26], [51.01, 83.43],
    [51.32, 80.68], [50.74, 80.08], [54.03, 76.50], [54.46, 76.93], [53.44, 73.44],
    [54.05, 73.77], [54.09, 71.18], [55.29, 70.81], [55.44, 68.93], [53.96, 61.03],
    [52.99, 62.13], [51.96, 59.99], [51.41, 61.51], [50.81, 61.45], [51.04, 54.69],
    [50.53, 54.54], [51.48, 53.43], [51.77, 50.77], [50.63, 48.57], [49.92, 48.75],
    [50.31, 47.31], [48.43, 46.49],
  ];

  const points = useMemo(
    () => borderCoords.map(([lat, lng]) => {
      const v = latLngToVector3(lat, lng, GLOBE_RADIUS + 0.015);
      return [v.x, v.y, v.z] as [number, number, number];
    }),
    []
  );

  return (
    <>
      <Line points={points} color="#3B82F6" lineWidth={3} transparent opacity={1} />
      <Line points={points} color="#60A5FA" lineWidth={6} transparent opacity={0.5} />
      <Line points={points} color="#93C5FD" lineWidth={10} transparent opacity={0.2} />
    </>
  );
}

function GlobeObject() {
  const globeRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture("/textures/earth-hd.jpg");

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y = -2.7;
      globeRef.current.rotation.x = 0.4;
    }
  });

  return (
    <group ref={globeRef}>
      <Sphere args={[GLOBE_RADIUS, 64, 64]}>
        <meshStandardMaterial map={earthTexture} metalness={0.1} roughness={0.8} />
      </Sphere>
      <Sphere args={[GLOBE_RADIUS + 0.005, 64, 64]}>
        <meshStandardMaterial color="#3B82F6" transparent opacity={0.08} />
      </Sphere>
      <Sphere args={[GLOBE_RADIUS + 0.05, 64, 64]}>
        <meshStandardMaterial color="#93C5FD" transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>
      <Sphere args={[GLOBE_RADIUS + 0.1, 64, 64]}>
        <meshStandardMaterial color="#60A5FA" transparent opacity={0.03} side={THREE.BackSide} />
      </Sphere>
      {(Object.keys(locations) as (keyof typeof locations)[]).map((key) => (
        <LocationMarker key={key} locKey={key} />
      ))}
      <KazakhstanBorder />
      {routes.map((route, i) => (
        <AnimatedRoute key={i} {...route} />
      ))}
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }} style={{ background: "transparent" }} gl={{ alpha: true }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 3, 5]} intensity={1} />
          <directionalLight position={[-5, -3, -5]} intensity={0.3} />
          <pointLight position={[0, 0, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <GlobeObject />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </div>
  );
}
