import { parseSTWSchematicTemplateId } from '../../util/Util';
import STWSchematic from './STWSchematic';
import type Client from '../../Client';
import type { STWProfileSchematicData } from '../../../resources/httpResponses';
import type { STWSchematicEvoType, STWSchematicMeleeSubType, STWSchematicRangedSubType } from '../../../resources/structs';

class STWWeaponSchematic extends STWSchematic {
  public override type: 'ranged' | 'melee';
  public override subType: STWSchematicRangedSubType | STWSchematicMeleeSubType;
  public override evoType: STWSchematicEvoType;

  constructor(client: Client, id: string, data: STWProfileSchematicData & {
    type: 'ranged' | 'melee';
    subType: STWSchematicRangedSubType | STWSchematicMeleeSubType;
    evoType: STWSchematicEvoType;
  }) {
    super(client, id, data);

    const parsedSchematic = parseSTWSchematicTemplateId(data.templateId);

    this.type = parsedSchematic.type as 'ranged' | 'melee';
    this.subType = parsedSchematic.subType as STWSchematicRangedSubType | STWSchematicMeleeSubType;
    this.evoType = parsedSchematic.evoType as STWSchematicEvoType;
  }
}

export default STWWeaponSchematic;
