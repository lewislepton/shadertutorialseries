#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main(){
  vec2 coord = gl_FragCoord.xy;
  vec3 color = vec3(0.0);

  color.r = u_mouse.x / u_resolution.x;
  color.b = u_mouse.y / u_resolution.y;

  gl_FragColor = vec4(color, 1.0);
}