export const Submissions: string[] = [
  "https://www.youtube.com/watch?v=sE26JzsCgEQ",
  "https://www.youtube.com/watch?v=kF1mi_1S_qY",
  "https://www.youtube.com/watch?v=K09xQuFdDuA",
  "https://youtu.be/og9HYPJW97A",
  "https://www.youtube.com/watch?v=QQPqQlj8i40",
];

interface EngagementI {
  date: string
  likes: number
  comments: number
  views: number
}

export const Engagement: EngagementI[] = [
  {
    date: "2023-02-01",
    likes: 44578,
    comments: 318,
    views: 1075,
  },
  {
    date: "2023-01-30",
    likes: 8031,
    comments: 302,
    views: 5448,
  },
  {
    date: "2023-01-11",
    likes: 27675,
    comments: 1924,
    views: 169,
  },
  {
    date: "2023-01-11",
    likes: 27675,
    comments: 1924,
    views: 1697,
  },
  {
    date: "2023-02-01",
    likes: 44578,
    comments: 318,
    views: 10755,
  },
  {
    date: "2023-01-30",
    likes: 8031,
    comments: 302,
    views: 544,
  },
  {
    date: "2023-01-11",
    likes: 27675,
    comments: 0,
    views: 10000,
  },
  {
    date: "2023-01-11",
    likes: 27675,
    comments: 3455,
    views: 0,
  },
]

export interface TrafficI {
  date: string
  reach: number
  impressions: number
}

export const Reach: TrafficI[] = [
  {
    date: "2023-01-18",
    reach: 70,
    impressions: 192,
  },
  {
    date: "2023-01-17",
    reach: 96,
    impressions: 392,
  },
  {
    date: "2023-01-16",
    reach: 35,
    impressions: 591,
  },
  {
    date: "2023-01-15",
    reach: 71,
    impressions: 192,
  },
  {
    date: "2023-01-14",
    reach: 49,
    impressions: 392,
  },
  {
    date: "2023-01-13",
    reach: 120,
    impressions: 591,
  },
  {
    date: "2023-01-12",
    reach: 50,
    impressions: 392,
  },
  {
    date: "2023-01-11",
    reach: 230,
    impressions: 101,
  },
]
