import STWWeaponSchematic from './STWWeaponSchematic';
import type { STWSchematicRangedSubType } from '../../../resources/structs';

class STWRangedWeaponSchematic extends STWWeaponSchematic {
  public override type!: 'ranged';
  public override subType!: STWSchematicRangedSubType;
}

export default STWRangedWeaponSchematic;
