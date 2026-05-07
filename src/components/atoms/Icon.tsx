import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, size = 24, className = '', color, style }: IconProps) {
  // Map icon names to Lucide icons
  const iconMap: Record<string, any> = {
    'chart': Icons.BarChart3,
    'users': Icons.Users,
    'settings': Icons.Settings,
    'cloud': Icons.Cloud,
    'database': Icons.Database,
    'shield': Icons.Shield,
    'rocket': Icons.Rocket,
    'target': Icons.Target,
    'eye': Icons.Eye,
    'heart': Icons.Heart,
    'star': Icons.Star,
    'check': Icons.Check,
    'arrow-left': Icons.ArrowLeft,
    'arrow-right': Icons.ArrowRight,
    'phone': Icons.Phone,
    'email': Icons.Mail,
    'location': Icons.MapPin,
    'globe': Icons.Globe,
    'menu': Icons.Menu,
    'x': Icons.X,
    'moon': Icons.Moon,
    'sun': Icons.Sun,
    'home': Icons.Home,
    'about': Icons.Info,
    'contact': Icons.Mail,
    'faq': Icons.HelpCircle,
    'pricing': Icons.Tag,
    'login': Icons.LogIn,
    'signup': Icons.UserPlus,
  };

  const LucideIcon = iconMap[name];
  
  if (!LucideIcon) {
    // Fallback to a default icon
    return <Icons.HelpCircle size={size} className={className} color={color}  style={style}/>;
  }

  return <LucideIcon size={size} className={className} color={color} style={style} />;
}