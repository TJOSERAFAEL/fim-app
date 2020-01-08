import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServerInterface } from 'src/app/core/interfaces/servers';
import { ServersService } from 'src/app/core/services/servers.service';
import { AddServerComponent } from 'src/app/shared/components/add-server/add-server.component';
import { DeleteServerComponent } from 'src/app/shared/components/delete-server/delete-server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.sass']
})
export class ServersComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns: string[] = ['id','name','ip_address','creation_date','status','configuration','delete'];
  servers : Array<ServerInterface>;
  dataServers: any;

  constructor(private serversService : ServersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.serversService.getServers().subscribe(data => {
        this.servers = data.map(server => server);
        this.dataServers = new MatTableDataSource(this.servers);
        this.dataServers.sort = this.sort;
      }
    );
  }

  openConfiguration(id: string) {

  }

  openAddServer() {
    this.dialog.open(AddServerComponent,{ width: '640px', disableClose: false});
  }

  openDeleteServer(server: string) {
    this.dialog.open(DeleteServerComponent,{ width: '400px', disableClose: false, data: server});
  }

}
