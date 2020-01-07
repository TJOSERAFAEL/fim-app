import { ServerInterface } from '../../interfaces/servers';

export class ServersData {
    public static readonly SERVER_LIST : Array<ServerInterface> = [
        {
            id: "507f1f77bcf86cd799439011",
            name: "Server 1",
            creation_date: "2019-12-22T04:29:03+00:00",
            modification_date: "2019-12-22T05:29:03+00:00",
            ip_address: "192.168.1.2",
            status: "running"
        },
        {
            id: "507f1f77bcf86cd799439012",
            name: "Server 2",
            creation_date: "2019-12-22T05:29:03+00:00",
            modification_date: "2019-12-22T06:29:03+00:00",
            ip_address: "192.168.1.3",
            status: "running"
        },
        {
            id: "507f1f77bcf86cd799439013",
            name: "Server 3",
            creation_date: "2019-12-22T06:29:03+00:00",
            modification_date: "2019-12-22T07:29:03+00:00",
            ip_address: "192.168.1.4",
            status: "running"
        },
    ];
}