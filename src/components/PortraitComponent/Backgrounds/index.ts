import type { UiTheme } from "../../../contexts";
import type { Nullable } from "../../../utils";

import BS from "./Backgrounds.BS";
import Ces from "./Backgrounds.Ces";
import OTB from "./Backgrounds.OTB";
import Shea from "./Backgrounds.Shea";
import Stripes from "./Backgrounds.Stripes";
import Tape from "./Backgrounds.Tape";

const backgrounds: {[key in UiTheme.ColorTheme]: Nullable<() => JSX.Element>} = {
  default: Stripes,
  bs: BS,
  ces: Ces,
  otb: OTB,
  shea: Shea,
  tape: Tape,
}

export default backgrounds;
