export interface FileInterface {
    owner: string;
    creation_date: string;
    modification_date: string;
    access_date: string;
    path: string;
    checksums : {
        md5: string
        sha1: string
    }
    os: string
    machine: string
    action: string
    action_description: string
    pinned: boolean
  }