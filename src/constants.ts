export enum MatchStatuses {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export const bgColors = {
  [MatchStatuses.Scheduled]: "bg-orange-main",
  [MatchStatuses.Ongoing]: "bg-green-main",
  [MatchStatuses.Finished]: "bg-red-main",
};
