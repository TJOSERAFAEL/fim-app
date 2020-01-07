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

});
