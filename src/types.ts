export interface JobItem {
  id: string;
  arabicPrimary: string;
  english: string | null;
  audioUrl: string;
}

export interface GenerateRequest {
  jobId: string;
  delaySeconds: number;
  items: JobItem[];
}
