export type ServerCategory = 'virtual_airline' | 'atc' | 'flight_school' | 'general_aviation' | 'spotting_media';

export interface PartnerServer {
  id: string;
  name: string;
  tagline: string;
  category: ServerCategory;
  categoryLabel: string;
  members: number;
  activePilots: number;
  hubAirport: string;
  fleetSummary: string;
  inviteCode: string;
  featuredRoute: string;
  description: string;
  logo: string;
  banner: string;
  embedColor: string;
  tags: string[];
  verified: boolean;
  status: 'recruiting' | 'active_flight' | 'atc_online' | 'open';
}

export interface EmbedConfig {
  serverName: string;
  category: string;
  description: string;
  hub: string;
  fleet: string;
  members: string;
  currentEvent: string;
  inviteLink: string;
  accentColor: string;
  iconUrl: string;
  bannerUrl: string;
  footerText: string;
  showMemberCount: boolean;
  showActiveStatus: boolean;
}

export interface PtfsAirport {
  id: string;
  name: string;
  icao: string;
  region: string;
  runways: string[];
  activeTraffic: number;
  atcFrequency: string;
  currentAtc: string;
  weather: string;
  popularFor: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  server: string;
  avatar: string;
  quote: string;
  growthStat: string;
}
