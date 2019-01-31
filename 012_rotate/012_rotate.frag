#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float rectshape(vec2 position, vec2 scale){
	scale = vec2(0.5) - scale * 0.5;
	vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
	shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
	return shaper.x * shaper.y;
}

mat2 rotate(float angle){
	return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main(){
	vec2 coord = gl_FragCoord.xy / u_resolution;
	vec3 color = vec3(0.0);

	coord -= vec2(0.5);
	coord = rotate(0.3) * coord;
	coord += vec2(0.5);

	color += vec3(rectshape(coord, vec2(0.3, 0.3)));

	gl_FragColor = vec4(color, 1.0);
}