const drc = require('./lib/index');

const imageRef = "nexus.admin.sharecare.com/chatservice-api:0.99-239";
const repoAndRef = drc.parseRepoAndRef(imageRef);
const registry = drc.createClientV2( {
  repo: repoAndRef,
  username: "clair",
  password: "W@**7b!GWJSDPW&7#6jYzMt38s^#85HC^QfH26&zW5XtWs^x%8fcDg#@7s$nmUg*hF5BTNcbs%vn!&u9R7dgrtu4@UQasgb9GP6s"
});
const ref = repoAndRef.tag || repoAndRef.digest;

registry.getManifest({ ref, maxSchemaVersion: 2 }, (err, manifest) => {
  console.log('err is %j', err);
  console.log('manifest is %j', manifest);
  if (err) {
    console.log(`error trying to retrieve manifest for image ${imageRef}: ${err.message || err.body.code}`);
    process.exit(1);
  } else {
    console.log('retrieved manifest for layer %o', imageRef);
//    resolve(this.buildLayers(manifest));
    process.exit(0);
  }
});

console.log('finished');
process.exit(0);

