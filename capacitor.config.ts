import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'angular-cv',
  webDir: 'dist/angular-cv',
  server: {
    androidScheme: 'https'
  }
};

export default config;
