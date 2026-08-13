import { useState, useEffect, useRef } from "react";

const COLORS = {
  primary: "#FF6B35",
  primaryGrad1: "#FFA929",
  primaryGrad2: "#E85F2E",
  primaryGrad3: "#FF1915",
  accent: "#FFD02A",
  bg: "#F7F8FA",
  sidebar: "#FFFFFF",
  border: "#E5E7EB",
  text: "#111827",
  textMuted: "#6B7280",
  textLight: "#9CA3AF",
  white: "#FFFFFF",
  success: "#10B981",
  blue: "#3B82F6",
  purple: "#8B5CF6",
  pink: "#EC4899",
};

const mockAds = [
  {
    id: 1,
    platform: "facebook",
    product: "Masajeador Facial Eléctrico",
    brand: "GlowTech",
    image: "https://via.placeholder.com/280x280/FF6B35/FFFFFF?text=Masajeador",
    likes: 12400,
    comments: 892,
    shares: 3200,
    date: "hace 2 días",
    score: 98,
    country: "🇺🇸 US",
    category: "Belleza",
    revenue: "$45,000",
    trend: "↑ 234%",
  },
  {
    id: 2,
    platform: "tiktok",
    product: "Botella de Agua Magnética",
    brand: "HydroMax",
    image: "https://via.placeholder.com/280x280/3B82F6/FFFFFF?text=Botella",
    likes: 89000,
    comments: 4200,
    shares: 12000,
    date: "hace 1 día",
    score: 95,
    country: "🇬🇧 UK",
    category: "Fitness",
    revenue: "$78,000",
    trend: "↑ 412%",
  },
  {
    id: 3,
    platform: "facebook",
    product: "Organizador de Cables USB-C",
    brand: "TechFlow",
    image: "https://via.placeholder.com/280x280/8B5CF6/FFFFFF?text=Cables",
    likes: 5600,
    comments: 320,
    shares: 890,
    date: "hace 3 días",
    score: 87,
    country: "🇨🇦 CA",
    category: "Tecnología",
    revenue: "$23,000",
    trend: "↑ 89%",
  },
  {
    id: 4,
    platform: "pinterest",
    product: "Lámpara LED Decorativa",
    brand: "LumiHome",
    image: "https://via.placeholder.com/280x280/EC4899/FFFFFF?text=Lampara",
    likes: 23000,
    comments: 1100,
    shares: 5600,
    date: "hace 4 días",
    score: 92,
    country: "🇦🇺 AU",
    category: "Hogar",
    revenue: "$56,000",
    trend: "↑ 178%",
  },
  {
    id: 5,
    platform: "tiktok",
    product: "Mini Proyector Portátil",
    brand: "CinemaGo",
    image: "https://via.placeholder.com/280x280/10B981/FFFFFF?text=Proyector",
    likes: 145000,
    comments: 8900,
    shares: 34000,
    date: "hace 6 horas",
    score: 99,
    country: "🇺🇸 US",
    category: "Entretenimiento",
    revenue: "$120,000",
    trend: "↑ 567%",
  },
  {
    id: 6,
    platform: "facebook",
    product: "Cepillo Alisador Inalámbrico",
    brand: "SilkSmooth",
    image: "https://via.placeholder.com/280x280/FFD02A/333333?text=Cepillo",
    likes: 9800,
    comments: 670,
    shares: 2100,
    date: "hace 5 días",
    score: 84,
    country: "🇫🇷 FR",
    category: "Belleza",
    revenue: "$34,000",
    trend: "↑ 145%",
  },
];

const navItems = [
  {
    section: "Herramientas",
    items: [
      { id: "dashboard", label: "Inicio", icon: HomeIcon },
      { id: "facebook", label: "Anuncios Facebook", icon: FacebookIcon },
      { id: "tiktok", label: "Anuncios TikTok", icon: TiktokIcon },
      { id: "pinterest", label: "Anuncios Pinterest", icon: PinterestIcon },
      { id: "winners", label: "Productos Ganadores", icon: TrophyIcon },
      { id: "aliexpress", label: "AliExpress", icon: ShoppingIcon },
    ],
  },
  {
    section: "Cuenta",
    items: [
      { id: "favorites", label: "Favoritos", icon: HeartIcon },
      { id: "alerts", label: "Alertas", icon: BellIcon },
      { id: "settings", label: "Configuración", icon: SettingsIcon },
    ],
  },
];

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}
function PinterestIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 21 12 17 16 21" />
      <line x1="12" y1="17" x2="12" y2="11" />
      <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
      <path d="M4 6H7" />
      <path d="M17 6h3" />
    </svg>
  );
}
function ShoppingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function ChevronIcon({ collapsed }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: collapsed ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function StarIcon({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#FFD02A" : "none"} stroke="#FFD02A" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L19 9L14 14L15.18 21L12 18L8.82 21L10 14L5 9L10.91 8.26L12 2Z" />
    </svg>
  );
}

function MineaLogo({ size = 32 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size * 3.25} height={size} viewBox="0 0 104 34" fill="none">
      <defs>
        <linearGradient id="logo-grad" x1="17" x2="6.189" y1="1.857" y2="28.636" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA929" />
          <stop offset="0.813" stopColor="#E85F2E" />
          <stop offset="1" stopColor="#FF1915" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" x="1" y="1" fill="url(#logo-grad)" rx="8.533" />
      <rect width="30.933" height="30.933" x="1.533" y="1.533" stroke="#fff" strokeWidth="1.067" rx="8" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M17.811 9.117a.483.483 0 0 0-.611.32l-.17.565c-3.203-.187-7.16 1.122-9.544 2.065-.553.219-.406 1.004.188 1.049 2.145.162 5.4.5 8.06 1.181l-3.196 10.594a.644.644 0 0 0 .418.798l1.611.523a.644.644 0 0 0 .804-.393l3.731-10.326c2.735 1.222 5.7 3.015 7.48 4.148.441.28.95-.19.685-.64-1.29-2.2-3.775-5.963-6.609-7.813l.201-.557a.483.483 0 0 0-.305-.623z"
        clipRule="evenodd"
      />
      <path fill="#222" d="M46.435 9.455h3.224l4.318 10.54h.17l4.319-10.54h3.224V24h-2.528v-9.993h-.135l-4.02 9.95h-1.89l-4.019-9.971h-.135V24h-2.528zM64.446 24V13.09h2.571V24zm1.293-12.457a1.5 1.5 0 0 1-1.052-.405 1.3 1.3 0 0 1-.44-.987q0-.583.44-.988a1.49 1.49 0 0 1 1.052-.412q.618 0 1.05.412.441.406.441.988 0 .575-.44.987-.435.405-1.051.405m6.493 6.065V24H69.66V13.09h2.457v1.855h.128q.377-.917 1.2-1.456.832-.54 2.053-.54 1.13 0 1.967.483.846.483 1.307 1.399.47.916.462 2.223V24h-2.571v-6.548q0-1.094-.569-1.712-.56-.618-1.555-.618-.675 0-1.2.299a2.07 2.07 0 0 0-.817.845q-.291.553-.291 1.342m14.446 6.605q-1.64 0-2.834-.682a4.6 4.6 0 0 1-1.825-1.946q-.64-1.264-.64-2.976 0-1.683.64-2.954.645-1.278 1.804-1.989 1.157-.717 2.72-.717 1.008 0 1.903.327a4.3 4.3 0 0 1 1.591.994q.696.675 1.094 1.719.398 1.036.398 2.471v.789h-8.942v-1.733h6.477a2.77 2.77 0 0 0-.32-1.314 2.3 2.3 0 0 0-.873-.917q-.555-.333-1.292-.333-.79 0-1.385.383a2.64 2.64 0 0 0-.93.994 2.86 2.86 0 0 0-.335 1.343v1.513q0 .951.348 1.633.349.675.973 1.037.626.355 1.463.355.562 0 1.016-.156.455-.163.788-.476.334-.312.505-.774l2.4.27a3.74 3.74 0 0 1-.866 1.662q-.632.703-1.62 1.093-.987.384-2.258.384" />
    </svg>
  );
}

function PlatformBadge({ platform }) {
  const config = {
    facebook: { color: "#1877F2", label: "Facebook" },
    tiktok: { color: "#000000", label: "TikTok" },
    pinterest: { color: "#E60023", label: "Pinterest" },
  };
  const c = config[platform] || config.facebook;
  return (
    <span
      style={{
        background: c.color,
        color: "#fff",
        fontSize: "10px",
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: "20px",
        letterSpacing: "0.02em",
      }}
    >
      {c.label}
    </span>
  );
}

function ScoreBadge({ score }) {
  const color = score >= 95 ? "#10B981" : score >= 85 ? "#F59E0B" : "#6B7280";
  return (
    <span
      style={{
        background: `${color}20`,
        color: color,
        fontSize: "11px",
        fontWeight: 700,
        padding: "2px 7px",
        borderRadius: "20px",
        border: `1px solid ${color}40`,
      }}
    >
      ★ {score}
    </span>
  );
}

function AdCard({ ad, onSave, saved }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "#FF6B3540" : COLORS.border}`,
        overflow: "hidden",
        transition: "all 0.25s ease",
        boxShadow: hovered ? "0 8px 32px rgba(255,107,53,0.15)" : "0 2px 8px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", width: "100%", paddingTop: "75%", background: "#f3f4f6", overflow: "hidden" }}>
        <img
          src={imgError ? `https://via.placeholder.com/280x210/FF6B35/FFFFFF?text=${encodeURIComponent(ad.product)}` : ad.image}
          alt={ad.product}
          onError={() => setImgError(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Overlay badges */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <PlatformBadge platform={ad.platform} />
        </div>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <ScoreBadge score={ad.score} />
        </div>
        {/* Save button */}
        <button
          onClick={(e) => { e.stopPropagation(); onSave(ad.id); }}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            background: saved ? "#FF6B35" : "rgba(255,255,255,0.9)",
            border: "none",
            borderRadius: "50%",
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            transition: "all 0.2s",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "#fff" : "none"} stroke={saved ? "#fff" : "#555"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {/* Trend */}
        <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(16,185,129,0.9)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 8px", borderRadius: "20px" }}>
          {ad.trend}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: "13px", color: COLORS.text, lineHeight: 1.3, marginBottom: 2 }}>{ad.product}</div>
            <div style={{ fontSize: "11px", color: COLORS.textMuted }}>{ad.brand} · {ad.country}</div>
          </div>
          <span style={{ fontSize: "11px", background: "#F3F4F6", color: COLORS.textMuted, padding: "2px 7px", borderRadius: "20px" }}>{ad.category}</span>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
          <Stat icon="👍" value={formatNumber(ad.likes)} />
          <Stat icon="💬" value={formatNumber(ad.comments)} />
          <Stat icon="🔁" value={formatNumber(ad.shares)} />
        </div>

        {/* Revenue + Date */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 10, borderTop: `1px solid ${COLORS.border}` }}>
          <div>
            <div style={{ fontSize: "10px", color: COLORS.textMuted, marginBottom: 1 }}>Revenue estimado</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: COLORS.success }}>{ad.revenue}</div>
          </div>
          <div style={{ fontSize: "11px", color: COLORS.textLight }}>{ad.date}</div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, fontSize: "12px", color: COLORS.textMuted }}>
      <span style={{ fontSize: "11px" }}>{icon}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}

function formatNumber(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
}

function StatCard({ label, value, sub, color, icon }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, padding: "20px 24px", border: `1px solid ${COLORS.border}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", flex: 1, minWidth: 140 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: "12px", color: COLORS.textMuted, marginBottom: 4, fontWeight: 500 }}>{label}</div>
          <div style={{ fontSize: "26px", fontWeight: 800, color: color || COLORS.text }}>{value}</div>
          {sub && <div style={{ fontSize: "11px", color: COLORS.success, marginTop: 2, fontWeight: 600 }}>{sub}</div>}
        </div>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${color || COLORS.primary}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function SearchBar({ value, onChange, placeholder }) {
  return (
    <div style={{ position: "relative", flex: 1 }}>
      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: COLORS.textMuted }}>
        <SearchIcon />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Buscar productos, marcas, nichos..."}
        style={{
          width: "100%",
          padding: "10px 14px 10px 44px",
          borderRadius: 10,
          border: `1.5px solid ${COLORS.border}`,
          fontSize: 14,
          outline: "none",
          background: "#fff",
          color: COLORS.text,
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
        onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
      />
    </div>
  );
}

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: 20,
        border: `1.5px solid ${active ? COLORS.primary : COLORS.border}`,
        background: active ? `${COLORS.primary}15` : "#fff",
        color: active ? COLORS.primary : COLORS.textMuted,
        fontSize: 12,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}

function SidebarLink({ item, active, collapsed, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isActive = active === item.id;
  const Icon = item.icon;

  return (
    <li style={{ listStyle: "none" }}>
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onClick(item.id)}
        title={collapsed ? item.label : undefined}
        style={{
          display: "flex",
          alignItems: "center",
          gap: collapsed ? 0 : 10,
          width: "100%",
          padding: collapsed ? "10px 0" : "10px 12px",
          justifyContent: collapsed ? "center" : "flex-start",
          borderRadius: 10,
          border: "none",
          background: isActive ? `${COLORS.primary}15` : hovered ? "#F9FAFB" : "transparent",
          color: isActive ? COLORS.primary : hovered ? COLORS.text : COLORS.textMuted,
          fontWeight: isActive ? 700 : 500,
          fontSize: 13,
          cursor: "pointer",
          transition: "all 0.15s",
          textAlign: "left",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ flexShrink: 0, color: isActive ? COLORS.primary : "inherit", display: "flex" }}>
          <Icon />
        </span>
        {!collapsed && <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>}
        {!collapsed && isActive && (
          <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: COLORS.primary, flexShrink: 0 }} />
        )}
      </button>
    </li>
  );
}

function DashboardContent({ savedAds, onSave }) {
  return (
    <div>
      {/* Welcome banner */}
      <div
        style={{
          borderRadius: 18,
          background: "linear-gradient(135deg, #FFA929 0%, #E85F2E 60%, #FF1915 100%)",
          padding: "28px 32px",
          marginBottom: 24,
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, background: "rgba(255,255,255,0.08)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: -40, right: 60, width: 100, height: 100, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <SparkleIcon />
          <span style={{ fontSize: 13, fontWeight: 600, opacity: 0.9 }}>IA Powered AdSpy</span>
        </div>
        <h1 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 800, lineHeight: 1.2 }}>
          Encuentra tu próximo<br />producto ganador 🚀
        </h1>
        <p style={{ margin: "0 0 20px", opacity: 0.85, fontSize: 14, maxWidth: 420 }}>
          Analiza millones de anuncios en Facebook, TikTok y Pinterest con nuestra IA avanzada para descubrir los productos más rentables.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="https://app.minea.com/en/register"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#fff",
              color: COLORS.primary,
              padding: "10px 22px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            Comenzar gratis →
          </a>
          <a
            href="https://app.minea.com/en/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            Iniciar sesión
          </a>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <StatCard label="Anuncios analizados" value="12.4M+" sub="↑ +1.2M esta semana" color={COLORS.primary} icon="📊" />
        <StatCard label="Productos ganadores" value="3,847" sub="↑ +234 hoy" color={COLORS.blue} icon="🏆" />
        <StatCard label="Usuarios activos" value="89K+" sub="↑ +12% este mes" color={COLORS.purple} icon="👥" />
        <StatCard label="Revenue detectado" value="$2.1B" sub="↑ +$340M este mes" color={COLORS.success} icon="💰" />
      </div>

      {/* Recent products */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: COLORS.text }}>🔥 Trending ahora</h2>
        <span style={{ fontSize: 12, color: COLORS.textMuted }}>Actualizado hace 5 min</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {mockAds.slice(0, 6).map((ad) => (
          <AdCard key={ad.id} ad={ad} onSave={onSave} saved={savedAds.includes(ad.id)} />
        ))}
      </div>
    </div>
  );
}

function AdsContent({ platform, savedAds, onSave }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [sortBy, setSortBy] = useState("score");
  const filters = ["Todos", "Belleza", "Fitness", "Tecnología", "Hogar", "Entretenimiento"];

  const filtered = mockAds.filter((ad) => {
    const matchPlatform = platform === "all" || ad.platform === platform;
    const matchSearch = ad.product.toLowerCase().includes(search.toLowerCase()) || ad.brand.toLowerCase().includes(search.toLowerCase()) || ad.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === "Todos" || ad.category === activeFilter;
    return matchPlatform && matchSearch && matchFilter;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "score") return b.score - a.score;
    if (sortBy === "likes") return b.likes - a.likes;
    return b.shares - a.shares;
  });

  const platformLabel = { facebook: "Facebook", tiktok: "TikTok", pinterest: "Pinterest", all: "Todos" }[platform];
  const platformColor = { facebook: "#1877F2", tiktok: "#000", pinterest: "#E60023", all: COLORS.primary }[platform];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: platformColor }} />
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: COLORS.text }}>
            Anuncios {platformLabel}
          </h2>
        </div>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>
          Descubre los anuncios más virales y los productos ganadores en {platformLabel}
        </p>
      </div>

      {/* Search + Sort */}
      <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
        <SearchBar value={search} onChange={setSearch} placeholder={`Buscar en anuncios ${platformLabel}...`} />
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <FilterIcon />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: "9px 14px",
              borderRadius: 10,
              border: `1.5px solid ${COLORS.border}`,
              fontSize: 13,
              color: COLORS.text,
              background: "#fff",
              cursor: "pointer",
              outline: "none",
              fontWeight: 500,
            }}
          >
            <option value="score">Por puntuación</option>
            <option value="likes">Por likes</option>
            <option value="shares">Por shares</option>
          </select>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        {filters.map((f) => (
          <FilterChip key={f} label={f} active={activeFilter === f} onClick={() => setActiveFilter(f)} />
        ))}
      </div>

      {/* Results count */}
      <div style={{ marginBottom: 16, fontSize: 13, color: COLORS.textMuted, fontWeight: 500 }}>
        {sorted.length} resultados encontrados
      </div>

      {/* Grid */}
      {sorted.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {sorted.map((ad) => (
            <AdCard key={ad.id} ad={ad} onSave={onSave} saved={savedAds.includes(ad.id)} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "60px 20px", color: COLORS.textMuted }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>No se encontraron resultados</div>
          <div style={{ fontSize: 13 }}>Intenta con otros términos de búsqueda</div>
        </div>
      )}
    </div>
  );
}

function WinnersContent({ savedAds, onSave }) {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: COLORS.text }}>🏆 Productos Ganadores</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>Los productos con mayor potencial de ventas detectados por nuestra IA</p>
      </div>

      {/* AI Score Banner */}
      <div style={{ background: "linear-gradient(135deg, #8B5CF620, #3B82F620)", border: "1px solid #8B5CF640", borderRadius: 14, padding: "16px 20px", marginBottom: 20, display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ fontSize: 32 }}>🤖</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.text, marginBottom: 2 }}>Análisis de IA activado</div>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>Nuestra IA analiza 50+ señales para calcular el potencial de cada producto: engagement, tendencias, competencia y márgenes de beneficio estimados.</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {mockAds
          .filter((a) => a.score >= 87)
          .sort((a, b) => b.score - a.score)
          .map((ad, i) => (
            <div key={ad.id} style={{ position: "relative" }}>
              {i === 0 && (
                <div style={{ position: "absolute", top: -10, left: 16, background: "linear-gradient(135deg, #FFD02A, #FFA929)", color: "#333", fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20, zIndex: 1, boxShadow: "0 2px 8px rgba(255,169,41,0.4)" }}>
                  #1 MEJOR PRODUCTO
                </div>
              )}
              <AdCard ad={ad} onSave={onSave} saved={savedAds.includes(ad.id)} />
            </div>
          ))}
      </div>
    </div>
  );
}

function AliexpressContent() {
  const products = [
    { id: 1, name: "Masajeador Facial Rodillo Jade", price: "$3.20", sellPrice: "$24.99", margin: "682%", orders: "45K+", rating: 4.8, img: "https://via.placeholder.com/200x200/FF6B35/FFFFFF?text=Jade" },
    { id: 2, name: "Reloj Inteligente Sport Plus", price: "$8.50", sellPrice: "$49.99", margin: "488%", orders: "120K+", rating: 4.7, img: "https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=Watch" },
    { id: 3, name: "Mini Aspirador Portátil USB", price: "$4.10", sellPrice: "$19.99", margin: "387%", orders: "67K+", rating: 4.6, img: "https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=Vac" },
    { id: 4, name: "Lámpara Proyector Galaxia LED", price: "$5.80", sellPrice: "$34.99", margin: "503%", orders: "89K+", rating: 4.9, img: "https://via.placeholder.com/200x200/10B981/FFFFFF?text=Galaxy" },
    { id: 5, name: "Auriculares TWS Bluetooth 5.3", price: "$6.20", sellPrice: "$39.99", margin: "545%", orders: "230K+", rating: 4.5, img: "https://via.placeholder.com/200x200/EC4899/FFFFFF?text=TWS" },
    { id: 6, name: "Organizador Maquillaje Giratorio", price: "$7.40", sellPrice: "$29.99", margin: "305%", orders: "34K+", rating: 4.7, img: "https://via.placeholder.com/200x200/FFD02A/333333?text=Make" },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: COLORS.text }}>🛒 AliExpress Spy</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>Encuentra proveedores con los mejores márgenes de beneficio</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#fff",
              borderRadius: 14,
              border: `1px solid ${COLORS.border}`,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,53,0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img src={p.img} alt={p.name} style={{ width: "100%", height: 160, objectFit: "cover" }} />
            <div style={{ padding: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.text, marginBottom: 8, lineHeight: 1.4 }}>{p.name}</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <div>
                  <div style={{ fontSize: 10, color: COLORS.textMuted }}>Precio proveedor</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.textMuted }}>{p.price}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: COLORS.textMuted }}>Precio venta</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.text }}>{p.sellPrice}</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderTop: `1px solid ${COLORS.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 11, color: COLORS.textMuted }}>{p.orders} pedidos</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <StarIcon filled />
                  <span style={{ fontSize: 11, fontWeight: 600 }}>{p.rating}</span>
                </div>
                <div style={{ background: "#10B98120", color: COLORS.success, fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>
                  {p.margin}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FavoritesContent({ savedAds, onSave }) {
  const favorites = mockAds.filter((ad) => savedAds.includes(ad.id));
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: COLORS.text }}>❤️ Mis Favoritos</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>{favorites.length} productos guardados</p>
      </div>
      {favorites.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {favorites.map((ad) => (
            <AdCard key={ad.id} ad={ad} onSave={onSave} saved={true} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px", color: COLORS.textMuted }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>💔</div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: COLORS.text }}>Sin favoritos aún</div>
          <div style={{ fontSize: 13 }}>Guarda productos haciendo clic en el ❤️ de las tarjetas</div>
        </div>
      )}
    </div>
  );
}

function AlertsContent() {
  const alerts = [
    { id: 1, type: "trending", text: "El producto 'Mini Proyector Portátil' ha aumentado un 567% en las últimas 24h", time: "hace 2h", icon: "🔥", color: "#FF6B35" },
    { id: 2, type: "new", text: "Nuevo producto ganador detectado en la categoría Belleza", time: "hace 4h", icon: "✨", color: "#8B5CF6" },
    { id: 3, type: "alert", text: "Competidor detectado para 'Masajeador Facial Eléctrico' — 5 nuevos anunciantes", time: "hace 6h", icon: "⚠️", color: "#F59E0B" },
    { id: 4, type: "revenue", text: "Estimación de revenue actualizada para tu lista de seguimiento: +$12,400", time: "hace 8h", icon: "💰", color: "#10B981" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: COLORS.text }}>🔔 Alertas</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>Mantente al día con los cambios en tiempo real</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {alerts.map((a) => (
          <div key={a.id} style={{ background: "#fff", borderRadius: 14, padding: "16px 20px", border: `1px solid ${COLORS.border}`, display: "flex", gap: 14, alignItems: "flex-start", boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: `${a.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
              {a.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, color: COLORS.text, fontWeight: 500, marginBottom: 4, lineHeight: 1.4 }}>{a.text}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SettingsContent() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ margin: "0 0 4px", fontSize: 22, fontWeight: 800, color: COLORS.text }}>⚙️ Configuración</h2>
        <p style={{ margin: 0, color: COLORS.textMuted, fontSize: 13 }}>Personaliza tu experiencia en Minea</p>
      </div>
      <div style={{ background: "#fff", borderRadius: 16, border: `1px solid ${COLORS.border}`, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        {[
          { label: "Cuenta", desc: "Gestiona tu cuenta y suscripción", icon: "👤" },
          { label: "Notificaciones", desc: "Configura alertas y avisos", icon: "🔔" },
          { label: "Idioma", desc: "Español", icon: "🌍" },
          { label: "Plan actual", desc: "Plan Gratuito — Actualizar a Pro", icon: "⭐" },
          { label: "Privacidad", desc: "Gestión de datos y privacidad", icon: "🔒" },
          { label: "Ayuda", desc: "Centro de ayuda y soporte", icon: "❓" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 20px",
              borderBottom: i < 5 ? `1px solid ${COLORS.border}` : "none",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F9FAFB")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div style={{ fontSize: 22 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.text }}>{item.label}</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted }}>{item.desc}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 20, background: "linear-gradient(135deg, #FFA929, #E85F2E)", borderRadius: 16, padding: "24px", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>🚀</div>
        <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 6 }}>Actualiza a Minea Pro</div>
        <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 16 }}>Accede a millones de anuncios, análisis avanzados y herramientas de IA ilimitadas</div>
        <a
          href="https://app.minea.com/en/register"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "#fff", color: COLORS.primary, padding: "10px 24px", borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: "none", display: "inline-block" }}
        >
          Ver planes →
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [savedAds, setSavedAds] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleSave = (id) => {
    setSavedAds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  const SIDEBAR_WIDTH = sidebarCollapsed ? 72 : 264;

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard": return <DashboardContent savedAds={savedAds} onSave={handleSave} />;
      case "facebook": return <AdsContent platform="facebook" savedAds={savedAds} onSave={handleSave} />;
      case "tiktok": return <AdsContent platform="tiktok" savedAds={savedAds} onSave={handleSave} />;
      case "pinterest": return <AdsContent platform="pinterest" savedAds={savedAds} onSave={handleSave} />;
      case "winners": return <WinnersContent savedAds={savedAds} onSave={handleSave} />;
      case "aliexpress": return <AliexpressContent />;
      case "favorites": return <FavoritesContent savedAds={savedAds} onSave={handleSave} />;
      case "alerts": return <AlertsContent />;
      case "settings": return <SettingsContent />;
      default: return <DashboardContent savedAds={savedAds} onSave={handleSave} />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: COLORS.bg, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Sidebar Desktop */}
      {!isMobile && (
        <aside
          style={{
            width: SIDEBAR_WIDTH,
            minWidth: SIDEBAR_WIDTH,
            background: COLORS.sidebar,
            borderRight: `1px solid ${COLORS.border}`,
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: 50,
            transition: "width 0.2s ease",
            overflowX: "hidden",
          }}
        >
          {/* Sidebar Header */}
          <div style={{ padding: "16px 16px 8px", borderBottom: `1px solid ${COLORS.border}` }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {!sidebarCollapsed && (
                <a href="https://app.minea.com/en" target="_blank" rel="noopener noreferrer" style={{ display: "flex" }}>
                  <MineaLogo size={28} />
                </a>
              )}
              {sidebarCollapsed && (
                <div style={{ margin: "0 auto" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34 34" fill="none">
                    <defs>
                      <linearGradient id="icon-grad" x1="17" x2="6" y1="1" y2="29" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFA929" /><stop offset="0.8" stopColor="#E85F2E" /><stop offset="1" stopColor="#FF1915" />
                      </linearGradient>
                    </defs>
                    <rect width="32" height="32" x="1" y="1" fill="url(#icon-grad)" rx="8.533" />
                    <path fill="#fff" fillRule="evenodd" d="M17.811 9.117a.483.483 0 0 0-.611.32l-.17.565c-3.203-.187-7.16 1.122-9.544 2.065-.553.219-.406 1.004.188 1.049 2.145.162 5.4.5 8.06 1.181l-3.196 10.594a.644.644 0 0 0 .418.798l1.611.523a.644.644 0 0 0 .804-.393l3.731-10.326c2.735 1.222 5.7 3.015 7.48 4.148.441.28.95-.19.685-.64-1.29-2.2-3.775-5.963-6.609-7.813l.201-.557a.483.483 0 0 0-.305-.623z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                style={{
                  background: "none",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: 8,
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: COLORS.textMuted,
                  flexShrink: 0,
                  marginLeft: sidebarCollapsed ? "auto" : 0,
                  transition: "all 0.2s",
                }}
              >
                <ChevronIcon collapsed={sidebarCollapsed} />
              </button>
            </div>

            {/* Auth buttons */}
            {!sidebarCollapsed && (
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <a
                  href="https://app.minea.com/en/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "8px",
                    borderRadius: 8,
                    background: `linear-gradient(135deg, ${COLORS.primaryGrad1}, ${COLORS.primaryGrad2})`,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 12,
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Registrarse
                </a>
                <a
                  href="https://app.minea.com/en/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "8px",
                    borderRadius: 8,
                    background: "#fff",
                    border: `1.5px solid ${COLORS.border}`,
                    color: COLORS.text,
                    fontWeight: 700,
                    fontSize: 12,
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  Entrar
                </a>
              </div>
            )}
          </div>

          {/* Nav */}
          <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", padding: "8px 12px" }}>
            {navItems.map((group) => (
              <div key={group.section} style={{ marginBottom: 8 }}>
                {!sidebarCollapsed && (
                  <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.textLight, textTransform: "uppercase", letterSpacing: "0.08em", padding: "8px 12px 4px", marginBottom: 2 }}>
                    {group.section}
                  </div>
                )}
                {sidebarCollapsed && <div style={{ height: 8 }} />}
                <ul style={{ margin: 0, padding: 0 }}>
                  {group.items.map((item) => (
                    <SidebarLink
                      key={item.id}
                      item={item}
                      active={activeSection}
                      collapsed={sidebarCollapsed}
                      onClick={(id) => setActiveSection(id)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom badge */}
          {!sidebarCollapsed && (
            <div style={{ padding: "12px 16px", borderTop: `1px solid ${COLORS.border}` }}>
              <div style={{ background: "linear-gradient(135deg, #FFA92915, #E85F2E15)", borderRadius: 10, padding: "10px 12px", border: "1px solid #FFA92930" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <SparkleIcon />
                  <span style={{ fontSize: 11, fontWeight: 700, color: COLORS.primary }}>Powered by IA</span>
                </div>
                <div style={{ fontSize: 10, color: COLORS.textMuted, lineHeight: 1.4 }}>
                  Analiza millones de anuncios con inteligencia artificial avanzada
                </div>
              </div>
            </div>
          )}
        </aside>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 60, background: "#fff", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <MineaLogo size={24} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: COLORS.text }}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{ position: "fixed", top: 60, left: 0, right: 0, bottom: 0, background: "#fff", zIndex: 90, overflowY: "auto", padding: "12px 16px" }}
        >
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <a href="https://app.minea.com/en/register" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 10, background: `linear-gradient(135deg, ${COLORS.primaryGrad1}, ${COLORS.primaryGrad2})`, color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Registrarse
            </a>
            <a href="https://app.minea.com/en/login" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 10, background: "#fff", border: `1.5px solid ${COLORS.border}`, color: COLORS.text, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Entrar
            </a>
          </div>
          {navItems.map((group) => (
            <div key={group.section}>
              <div style={{ fontSize: 10, fontWeight: 700, color: COLORS.textLight, textTransform: "uppercase", letterSpacing: "0.08em", padding: "8px 4px 4px" }}>{group.section}</div>
              <ul style={{ margin: 0, padding: 0 }}>
                {group.items.map((item) => (
                  <SidebarLink
                    key={item.id}
                    item={item}
                    active={activeSection}
                    collapsed={false}
                    onClick={(id) => { setActiveSection(id); setMobileMenuOpen(false); }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <main
        style={{
          marginLeft: isMobile ? 0 : SIDEBAR_WIDTH,
          flex: 1,
          minHeight: "100vh",
          transition: "margin-left 0.2s ease",
          paddingTop: isMobile ? 60 : 0,
        }}
      >
        {/* Top bar */}
        {!isMobile && (
          <div style={{ height: 60, background: "#fff", borderBottom: `1px solid ${COLORS.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", position: "sticky", top: 0, zIndex: 40, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <div style={{ flex: 1, maxWidth: 420 }}>
              <SearchBar value="" onChange={() => {/* TODO: global search */}} placeholder="Buscar en Minea..." />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "#F9FAFB", border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: COLORS.textMuted, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.success, display: "inline-block" }} />
                En línea
              </div>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.primaryGrad1}, ${COLORS.primaryGrad2})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                U
              </div>
            </div>
          </div>
        )}

        {/* Page Content */}
        <div style={{ padding: isMobile ? "20px 16px" : "28px 28px 40px" }}>
          {renderContent()}
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      {isMobile && !mobileMenuOpen && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#fff", borderTop: `1px solid ${COLORS.border}`, display: "flex", zIndex: 80, boxShadow: "0 -4px 16px rgba(0,0,0,0.06)" }}>
          {[
            { id: "dashboard", icon: "🏠", label: "Inicio" },
            { id: "facebook", icon: "📘", label: "Facebook" },
            { id: "tiktok", icon: "🎵", label: "TikTok" },
            { id: "winners", icon: "🏆", label: "Ganadores" },
            { id: "favorites", icon: "❤️", label: "Guardados" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                flex: 1,
                background: "none",
                border: "none",
                padding: "10px 4px 8px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                color: activeSection === item.id ? COLORS.primary : COLORS.textMuted,
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: 9, fontWeight: activeSection === item.id ? 700 : 500 }}>{item.label}</span>
              {activeSection === item.id && <span style={{ width: 4, height: 4, borderRadius: "50%", background: COLORS.primary }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}