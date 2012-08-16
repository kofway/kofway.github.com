test("device storage ", function() {
  var ds = navigator.getDeviceStorage("pictures");
  ok(ds, "device storage is not null");
});

test("device storage write", function() {
  var ds = navigator.getDeviceStorage("pictures");
  var filename = "devicestorage/hi";
  request = ds.addNamed(createRandomBlob(), filename);
  ok(request, "request has a value");
  request.onsuccess = function () {
     newRequest = ds.get(filename)
     newRequest.onsuccess = addSuccess;
     newRequest.onerror = addError;
  }
  request.onerror = addError;
});
	
function addSuccess(e) {
  ok(true, "addSuccess was called");
}

function addError(e) {
  ok(false, "addError was called: " + e.target.error.name);
}

function createRandomBlob() {
  return blob = new Blob([getRandomBuffer()], {type: 'binary/random'});
}

function getRandomBuffer() {
  var size = 1024;
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  for (var i = 0; i < size; i++) {
    view[i] = parseInt(Math.random() * 255);
  }
  return buffer;
}
