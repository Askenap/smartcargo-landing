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
  usa: { lat: 40, lng: -100, label: "США" },
  brazil: { lat: -15, lng: -47, label: "Бразилия" },
  india: { lat: 20, lng: 78, label: "Индия" },
  japan: { lat: 36, lng: 140, label: "Япония" },
  australia: { lat: -25, lng: 135, label: "Австралия" },
  southafrica: { lat: -30, lng: 25, label: "ЮАР" },
  uae: { lat: 24, lng: 54, label: "ОАЭ" },
  korea: { lat: 37, lng: 127, label: "Корея" },
  canada: { lat: 56, lng: -106, label: "Канада" },
  mexico: { lat: 23, lng: -102, label: "Мексика" },
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
  { from: "china", to: "japan", color: "#EC4899", speed: 0.32, type: "plane" },
  { from: "usa", to: "eu", color: "#06B6D4", speed: 0.22, type: "plane" },
  { from: "brazil", to: "southafrica", color: "#F97316", speed: 0.2, type: "plane" },
  { from: "india", to: "uae", color: "#14B8A6", speed: 0.3, type: "truck" },
  { from: "kz", to: "india", color: "#A855F7", speed: 0.26, type: "plane" },
  { from: "australia", to: "japan", color: "#EF4444", speed: 0.24, type: "plane" },
  { from: "korea", to: "china", color: "#84CC16", speed: 0.33, type: "train" },
  { from: "canada", to: "usa", color: "#0EA5E9", speed: 0.29, type: "truck" },
  { from: "mexico", to: "brazil", color: "#D946EF", speed: 0.21, type: "truck" },
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

function GlobeObject() {
  const globeRef = useRef<THREE.Group>(null);
  const earthTexture = useTexture("/textures/earth-hd.jpg");

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y = -3;
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
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} style={{ background: "transparent" }} gl={{ alpha: true }}>
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
