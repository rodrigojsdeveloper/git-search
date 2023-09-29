import { IRepoProps } from "../interfaces";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
  return formattedDate;
}

function sortByMostRecent(repos: IRepoProps[]): IRepoProps[] {
  const currentDate = new Date();
  repos.sort((repo1, repo2) => {
    const diff1 = Math.abs(
      currentDate.getTime() - new Date(repo1.created_at).getTime()
    );
    const diff2 = Math.abs(
      currentDate.getTime() - new Date(repo2.created_at).getTime()
    );
    return diff1 - diff2;
  });

  return repos.map((repo) => ({
    ...repo,
    created_at: formatDate(repo.created_at),
  }));
}

export { formatDate, sortByMostRecent };
