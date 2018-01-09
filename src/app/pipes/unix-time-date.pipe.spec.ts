import { UnixTimeDatePipe } from './unix-time-date.pipe';

describe('UnixTimeDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimeDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('アイウはあいうに変換される', () => {
    const pipe = new UnixTimeDatePipe();
    expect(pipe.transform('アイウ').toBe('あいう'));
  });
});
