const Templates = ({ templates, setMeme }) => {
    return (
        <div className="templates">
            {templates.map((template) => (
                <div key={template.id} className="template" onClick={() => { setMeme(template); }}>
                    <div className="template-title">{template.name}
                        <div className="image"
                            style={{ backgroundImage: `url(${template.url})` }}
                        >
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};
export default Templates;