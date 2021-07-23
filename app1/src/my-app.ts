import { route } from 'aurelia';

@route({
  routes: [
    { id: 'home', path: '', component: import('./home-site'), title: 'Home' },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    { id: 'remote', path: 'remote', component: import('app2/remote-site'), title: 'Remote' },
  ]
})
export class MyApp {
  public message = 'Hello World from App1!';

  async remoteAction() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const m = await import('app2/superFunction');
    m.superFunction();
  }
}
