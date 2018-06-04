import { map } from "ramda";
import schemata from "./schemata";

class CheckpointModel {
  constructor({ task = "", resourceUrl = "" } = {}) {
    this.task = task;
    this.resourceUrl = resourceUrl;
  }
}

class CourseModel {
  static Checkpoint = CheckpointModel;
  static schemata = schemata;

  constructor({
    goal = "",
    checkpoints = [new CheckpointModel()],
    description = ""
  } = {}) {
    this.goal = goal;
    this.checkpoints = map(cp => new CheckpointModel(cp), checkpoints);
    this.description = description;
  }
}

export default CourseModel;
