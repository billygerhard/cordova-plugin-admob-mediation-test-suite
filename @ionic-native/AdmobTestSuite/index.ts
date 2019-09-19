import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name AdmobTestSuite
 * @description
 * Run the AdMob Mediation Test Suite
 *
 * @interfaces
 * AdmobTestSuiteStartupOptions
 */

export interface AdmobTestSuite_INTERFACE_OPTIONS {
  option?: any;
}

@Plugin({
  pluginName: 'AdmobTestSuite',
  plugin: 'admob-test-suite',
  pluginRef: 'AdmobTestSuite',
  repo: 'https://github.com/billygerhard/cordova-plugin-admob-test-suite',
  platforms: ['iOS,Android'],
})
@Injectable()
export class AdmobTestSuite extends IonicNativePlugin {
  /**
   * Starts AdmobTestSuite.
   * @param {AdmobTestSuite_INTERFACE_OPTIONS} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  startPlugin(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
    return;
  }
}
