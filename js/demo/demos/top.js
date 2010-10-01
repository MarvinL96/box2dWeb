goog.provide('demos.top');

goog.require('box2d.BodyDef');
goog.require('box2d.CircleDef');
goog.require('box2d.PolyDef');
goog.require('box2d.RevoluteJointDef');

demos.top = function(world) {
  demos.top.createBall(world, 350, 100, 50, true);
  demos.top.createPoly(world, 100, 100, [
    [0, 0],
    [10, 30],
    [-10, 30]], true);
  demos.top.createPoly(world, 150, 150, [
    [0, 0],
    [10, 30],
    [-10, 30]], true);
  var pendulum = Demo.createBox(world, 150, 100, 20, 20, false);
  var jointDef = new box2d.RevoluteJointDef();
  jointDef.body1 = pendulum;
  jointDef.body2 = world.GetGroundBody();
  jointDef.anchorPoint = pendulum.GetCenterPosition();
  world.CreateJoint(jointDef);

  var seesaw = demos.top.createPoly(world, 300, 200, [
    [0, 0],
    [100, 30],
    [-100, 30]]);
  jointDef.body1 = seesaw;
  jointDef.anchorPoint = seesaw.GetCenterPosition();
  world.CreateJoint(jointDef);
};

/**
 @param {boolean=} fixed
 */
demos.top.createBall = function(world, x, y, rad, fixed) {
  var ballSd = new box2d.CircleDef();
  if (!fixed) ballSd.density = 1.0;
  ballSd.radius = rad || 10;
  ballSd.restitution = 0.2;
  var ballBd = new box2d.BodyDef();
  ballBd.AddShape(ballSd);
  ballBd.position.Set(x, y);
  return world.CreateBody(ballBd);
};

/**
 @param {boolean=} fixed
 */
demos.top.createPoly = function(world, x, y, points, fixed) {
  var polySd = new box2d.PolyDef();
  if (!fixed) polySd.density = 1.0;
  polySd.vertexCount = points.length;
  for (var i = 0; i < points.length; i++) {
    polySd.vertices[i].Set(points[i][0], points[i][1]);
  }
  var polyBd = new box2d.BodyDef();
  polyBd.AddShape(polySd);
  polyBd.position.Set(x, y);
  return world.CreateBody(polyBd);
};
