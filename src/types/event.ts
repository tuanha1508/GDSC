export interface Speaker {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface Event {
  id: number;
  name: string;
  time: string;
  place: string;
  host: string;
  speaker: Speaker;
  image: string;
} 