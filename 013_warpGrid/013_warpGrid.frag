#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main(){
	vec2 coord = gl_FragCoord.xy / u_resolution;
	vec3 color = vec3(0.0);

	color += sin(coord.x * cos(u_time / 60.0) * 60.0) + sin(coord.y * cos(u_time / 60.0) * 10.0);
	color += cos(coord.y * sin(u_time / 30.0) * 10.0) + cos(coord.x * sin(u_time / 20.0) * 10.0);

	color *= sin(u_time / 10.0) * 0.5;

	gl_FragColor = vec4(color, 1.0);
}