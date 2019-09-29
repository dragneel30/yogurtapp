
import { Location, Permissions, SQLite } from "expo";

async function askAsync(...permissions) {

    for (let i = 0; i < permissions.length; i++) {

      let { status } = await Permissions.askAsync(permissions[i])
      
      if ( status != 'granted' ) {
        return false;
      }

    }

  return true;

}


export {
    askAsync
}