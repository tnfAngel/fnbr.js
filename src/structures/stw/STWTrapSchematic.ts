import STWSchematic from './STWSchematic';
import type { STWSchematicTrapSubType } from '../../../resources/structs';

class STWTrapSchematic extends STWSchematic {
  public override type!: 'trap';
  public override subType!: STWSchematicTrapSubType;
  public override evoType!: never;
}

export default STWTrapSchematic;
