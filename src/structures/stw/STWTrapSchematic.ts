import STWSchematic from './STWSchematic';
import { parseSTWSchematicTemplateId } from '../../util/Util';
import type { STWSchematicTrapSubType } from '../../../resources/structs';
import type Client from '../../Client';
import type { STWProfileSchematicData } from '../../../resources/httpResponses';

class STWTrapSchematic extends STWSchematic {
  public override type: 'trap';
  public override subType: STWSchematicTrapSubType;
  public override evoType: never;

  constructor(client: Client, id: string, data: STWProfileSchematicData & {
    type: 'trap';
    subType: STWSchematicTrapSubType
    evoType: never;
  }) {
    super(client, id, data);

    const parsedSchematic = parseSTWSchematicTemplateId(data.templateId);

    this.type = parsedSchematic.type as 'trap';
    this.subType = parsedSchematic.subType as STWSchematicTrapSubType;
    this.evoType = parsedSchematic.evoType as never;
  }
}

export default STWTrapSchematic;
