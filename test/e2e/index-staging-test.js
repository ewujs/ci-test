import {Selector} from 'testcafe';

fixture`CI/CD testing`
  .page`https://ci-test-staging.herokuapp.com/`;

test('page test', async t => {
  await t
    .expect(Selector('#page-title').innerText).eql('Hello, Travis-CI & Heroku!!');
});