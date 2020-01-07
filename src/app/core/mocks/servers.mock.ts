import { Injectable } from "@angular/core";
import { ServersData } from "src/app/core/mocks/data/servers.data";

@Injectable()
export class MockServers {

    public getServers() {
        return ServersData.SERVER_LIST;
    }
    
}