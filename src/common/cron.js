import Bree from "bree";

export const bree = new Bree({
  jobs: [
    {
      name: "sendEmail",
      cron: "56 0/1 * * *",
      worker: {
        workerData: {
          description: "The job will check time and then send emails.",
        },
      },
    },
  ],
});
