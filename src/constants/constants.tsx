export default class ProjectData {
  title: String;
  desc: String;
  repo: String;
  other: String;
  other_title: String;

  constructor(title: String, desc: String, repo: String);
  constructor(
    title: String,
    desc: String,
    repo: String,
    other: String,
    other_title: String
  );
  constructor(
    title: String,
    desc: String,
    repo: String,
    other?: String,
    other_title?: String
  ) {
    this.title = title;
    this.desc = desc;
    this.repo = repo;

    if (other && other_title) {
      this.other = other;
      this.other_title = other_title;
    } else {
      this.other = '';
      this.other_title = '';
    }
  }
}
