import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

let map = new CustomMap('map');

map.addMarker(user);
map.addMarker(company);
