import STWWeaponSchematic from './STWWeaponSchematic';
import { parseSTWSchematicTemplateId } from '../../util/Util';
import type { STWSchematicEvoType, STWSchematicRangedSubType } from '../../../resources/structs';
import type { STWProfileSchematicData } from '../../../resources/httpResponses';
import type Client from '../../Client';

class STWRangedWeaponSchematic extends STWWeaponSchematic {
  public override type: 'ranged';
  public override subType: STWSchematicRangedSubType;

  constructor(client: Client, id: string, data: STWProfileSchematicData & {
    type: 'ranged';
    subType: STWSchematicRangedSubType
    evoType: STWSchematicEvoType;
  }) {
    super(client, id, data);

    const parsedSchematic = parseSTWSchematicTemplateId(data.templateId);

    this.type = parsedSchematic.type as 'ranged';
    this.subType = parsedSchematic.subType as STWSchematicRangedSubType;
  }
}

export default STWRangedWeaponSchematic;
