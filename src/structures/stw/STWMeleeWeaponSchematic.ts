import STWWeaponSchematic from './STWWeaponSchematic';
import type { STWSchematicMeleeSubType } from '../../../resources/structs';

class STWMeleeWeaponSchematic extends STWWeaponSchematic {
  public override type!: 'melee';
  public override subType!: STWSchematicMeleeSubType;
}

export default STWMeleeWeaponSchematic;
