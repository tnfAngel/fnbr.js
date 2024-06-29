import STWSchematic from './STWSchematic';
import type { STWSchematicEvoType, STWSchematicMeleeSubType, STWSchematicRangedSubType } from '../../../resources/structs';

class STWWeaponSchematic extends STWSchematic {
  public override type!: 'ranged' | 'melee';
  public override subType!: STWSchematicRangedSubType | STWSchematicMeleeSubType;
  public override evoType!: STWSchematicEvoType;
}

export default STWWeaponSchematic;
