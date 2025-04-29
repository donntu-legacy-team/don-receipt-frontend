---
to: src/<%=path%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.tsx
---
export type <%=h.changeCase.pascalCase(name)%>Props = {
	example?: string,
}

export const <%=h.changeCase.pascalCase(name)%> = (props: <%=h.changeCase.pascalCase(name)%>Props) => {
	return (
		<div>
			<%=h.changeCase.pascalCase(name)%> {props.example}
		</div>
	)
}