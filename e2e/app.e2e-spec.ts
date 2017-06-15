import { SocketChatPage } from './app.po';

describe('socket-chat App', () => {
  let page: SocketChatPage;

  beforeEach(() => {
    page = new SocketChatPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
