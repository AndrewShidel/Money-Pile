
var cylinder_geometry = new THREE.CylinderGeometry( 2, 2, 0.5, 16 );
function makeCoin() {
  //var radius =
  var coin_sides_geo =
    new THREE.CylinderGeometry( 2.0, 2.0, 0.5, 100, 10.0, true );
  var coin_cap_geo = new THREE.Geometry();
  var r = 10.0;
  for (var i=0; i<100; i++) {
    var a = i * 1/100 * Math.PI * 2;
    var z = Math.sin(a);
    var x = Math.cos(a);
    var a1 = (i+1) * 1/100 * Math.PI * 2;
    var z1 = Math.sin(a1);
    var x1 = Math.cos(a1);
    coin_cap_geo.vertices.push(
      new THREE.Vector3(new THREE.Vector3(0, 0, 0)),
      new THREE.Vector3(new THREE.Vector3(x*r, 0, z*r)),
      new THREE.Vector3(new THREE.Vector3(x1*r, 0, z1*r))
    );
    coin_cap_geo.faceVertexUvs[0].push([
      new THREE.Vector2(0.5, 0.5),
      new THREE.Vector2(x/2+0.5, z/2+0.5),
      new THREE.Vector2(x1/2+0.5, z1/2+0.5)
    ]);
    coin_cap_geo.faces.push(new THREE.Face3(i*3, i*3+1, i*3+2));
  }
  coin_cap_geo.computeCentroids();
  coin_cap_geo.computeFaceNormals();

  var coin_sides_texture =
    THREE.ImageUtils.loadTexture("./../images/penny.png");
  var coin_cap_texture =
    THREE.ImageUtils.loadTexture("./../images/penny.png");

  var coin_sides_mat =
    new THREE.MeshLambertMaterial({map:coin_sides_texture});
  var coin_sides =
    new THREE.Mesh( coin_sides_geo, coin_sides_mat );

  var coin_cap_mat = new THREE.MeshLambertMaterial({map:coin_cap_texture});
  var coin_cap_top = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
  var coin_cap_bottom = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
  coin_cap_top.position.y = 0.5;
  coin_cap_bottom.position.y = -0.5;
  coin_cap_top.rotation.x = Math.PI;

  var coin = new THREE.Object3D();
  coin.add(coin_sides);
  coin.add(coin_cap_top);
  coin.add(coin_cap_bottom);
  return coin;
}

function makeCoin2() {

    var shape, material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true/*, map: THREE.ImageUtils.loadTexture("images/penny.png")*/ });
    shape = new Physijs.CylinderMesh(
        cylinder_geometry,
        material
    );

    shape.material.color.setRGB( (173/255) - Math.random()/5+0.1, (111/255) - (Math.random()/5+0.1), (105/255) - Math.random()/5+0.1 );
    return shape;
}

function makeCoin3() {
  var coin_sides_geo =
    new THREE.CylinderGeometry( 10.0, 10.0, 1.0, 100.0, 10.0, true );
  var coin_cap_geo = new THREE.Geometry();
  var r = 2.0;
  for (var i=0; i<100; i++) {
    var a = i * 1/100 * Math.PI * 2;
    var z = Math.sin(a);
    var x = Math.cos(a);
    var a1 = (i+1) * 1/100 * Math.PI * 2;
    var z1 = Math.sin(a1);
    var x1 = Math.cos(a1);
    coin_cap_geo.vertices.push(
      new THREE.Vertex(new THREE.Vector3(0, 0, 0)),
      new THREE.Vertex(new THREE.Vector3(x*r, 0, z*r)),
      new THREE.Vertex(new THREE.Vector3(x1*r, 0, z1*r))
    );
    coin_cap_geo.faceVertexUvs[0].push([
      new THREE.UV(0.5, 0.5),
      new THREE.UV(x/2+0.5, z/2+0.5),
      new THREE.UV(x1/2+0.5, z1/2+0.5)
    ]);
    coin_cap_geo.faces.push(new THREE.Face3(i*3, i*3+1, i*3+2));
  }
  coin_cap_geo.computeCentroids();
  coin_cap_geo.computeFaceNormals();

  var coin_sides_texture =
    THREE.ImageUtils.loadTexture("./images/penny.png");
  var coin_cap_texture =
    THREE.ImageUtils.loadTexture("./images/penny.png");

  var coin_sides_mat =
    new THREE.MeshLambertMaterial({map:coin_sides_texture});
  var coin_sides =
    new THREE.Mesh( coin_sides_geo, coin_sides_mat );

  var coin_cap_mat = new THREE.MeshLambertMaterial({map:coin_cap_texture});
  var coin_cap_top = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
  var coin_cap_bottom = new THREE.Mesh( coin_cap_geo, coin_cap_mat );
  coin_cap_top.position.y = 0.25;
  coin_cap_bottom.position.y = -0.25;
  coin_cap_top.rotation.x = Math.PI;


  var shape, material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });
  shape = new Physijs.CylinderMesh(
    cylinder_geometry,
    material
  );
  //shape.material.color.setRGB( (173/255) - Math.random()/5+0.1, (111/255) - (Math.random()/5+0.1), (105/255) - Math.random()/5+0.1 );
  //shape.add(coin_sides);
  shape.add(coin_cap_top);
  shape.add(coin_cap_bottom);
  return shape;
  //shape.material.color.setRGB( (173/255) - Math.random()/5+0.1, (111/255) - (Math.random()/5+0.1), (105/255) - Math.random()/5+0.1 );

  var coin = new THREE.Object3D();
//  coin.add(coin_sides);
//  coin.add(coin_cap_top);
//  coin.add(coin_cap_bottom);
  return coin;
}
