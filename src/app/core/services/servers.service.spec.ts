import { TestBed, inject } from '@angular/core/testing';
import { ServersService } from './servers.service';
import { ServersData } from '../mocks/data/servers.data';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('ServersService', () => {
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServersService]
    });
  });

  it('should get server list',
    inject([HttpTestingController, ServersService],
      (
        httpMock: HttpTestingController,
        serversService: ServersService
      ) => {
        const mockServerList = ServersData.SERVER_LIST;

        serversService.getServers().subscribe(data => {
          expect(data).toEqual(mockServerList);
        });

        const mockReq = httpMock.expectOne(environment.apiUrl + "servers/servers.json");
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.method).toEqual('GET');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockServerList);
        httpMock.verify();
      }
    )
  );

  it('should add a new server',
    inject([HttpTestingController, ServersService],
      (
        httpMock: HttpTestingController,
        serversService: ServersService
      ) => {
        const mockServer = {name:"new server", ip_address: "192.168.1.1"}

        serversService.addNewServer(mockServer.name, mockServer.ip_address).subscribe(data => {
          expect(data).toBeDefined();
        });

        const mockReq = httpMock.expectOne(environment.api + "server");
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.method).toEqual('POST');
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockServer);
        httpMock.verify();
      }
    )
  );

});
