import {getConfiguration, setConfiguration, ConfigurationTypes} from './config';

setConfiguration(ConfigurationTypes.DEV);

let configuration = getConfiguration();

console.log(configuration.ConnectionString);