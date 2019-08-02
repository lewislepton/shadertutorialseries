#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

float amount = 1.6;

float random2d(vec2 coord){
  return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
  vec2 coord = gl_FragCoord.xy / u_resolution;
  vec3 color = vec3(0.0);

  vec4 image = texture2D(u_tex0, coord);

  float noise = (random2d(coord) - 0.5) * amount;

  image.r += noise;
  image.g += noise;
  image.b += noise;

  gl_FragColor = image;
}