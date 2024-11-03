import STWWeaponSchematic from './STWWeaponSchematic';
import { parseSTWSchematicTemplateId } from '../../util/Util';
import type { STWSchematicEvoType, STWSchematicMeleeSubType } from '../../../resources/structs';
import type { STWProfileSchematicData } from '../../../resources/httpResponses';
import type Client from '../../Client';

class STWMeleeWeaponSchematic extends STWWeaponSchematic {
  public override type: 'melee';
  public override subType: STWSchematicMeleeSubType;

  constructor(client: Client, id: string, data: STWProfileSchematicData & {
    type: 'melee';
    subType: STWSchematicMeleeSubType;
    evoType: STWSchematicEvoType;
  }) {
    super(client, id, data);

    const parsedSchematic = parseSTWSchematicTemplateId(data.templateId);

    this.type = parsedSchematic.type as | 'melee';
    this.subType = parsedSchematic.subType as STWSchematicMeleeSubType;
  }
}

export default STWMeleeWeaponSchematic;
