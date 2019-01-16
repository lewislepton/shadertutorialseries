#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circleshape(vec2 position, float radius){
  return step(radius, length(position - vec2(0.5)));
}

void main(){
  vec2 position = gl_FragCoord.xy / u_resolution;

  vec3 color = vec3(0.0);

  float circle = circleshape(position, 0.2);

  color = vec3(circle);

  gl_FragColor = vec4(color, 1.0);
}