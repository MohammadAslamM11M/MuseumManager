import React, { useEffect, useState } from "react";

const Entry = () => {
    const initialValue = {
        title: "",
        name: "",
        placeMade: "",
        placeDisplayed: "",
        artist: "",
        manufacturer: "",
        builtBy: "",
        description: "",
        voiceDescription: "",
        material: "",
        classification: "",
        category: "",
        tags: "",
        images: "",
    };
    const [formValues, setFormValues] = useState(initialValue);
    const [isSubmit, setIsSubmit] = useState(false);
    const [showEnglishLang, setShowEnglishLang] = useState(false);
    const [showGermanLang, setShowGermanLang] = useState(false);
    const [showHindiLang, setShowHindiLang] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    useEffect(() => {
        if (isSubmit) {
        }
    }, []);
    return (
        <div className="card cardBody" style={{ overflow: "hidden" }}>
            <div className="card-body d-flex justify-content-between">
                <h2 className="card-title">Create Entry</h2>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Add Language
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" onClick={() => setShowEnglishLang(true)}>
                                English
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" onClick={() => setShowGermanLang(true)}>
                                German
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" onClick={() => setShowHindiLang(true)}>
                                Hindi
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="accordion">
                    {showEnglishLang && (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    English
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {isSubmit ? <div className="message">Saved Succesfully</div> : ""}
                                    <form onSubmit={handleSubmit}>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="preview">
                                                <button
                                                    className="accordion-button"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#previewOne"
                                                    aria-expanded="true"
                                                    aria-controls="previewOne"
                                                    style={{ overflow: "hidden" }}
                                                >
                                                    Preview
                                                </button>
                                            </h2>
                                            <div
                                                id="previewOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="preview"
                                                data-bs-parent="#accordionExample"
                                            >
                                                <div className="accordion-body">
                                                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label">Title</label>
                                                    <input
                                                        type="text"
                                                        name="title"
                                                        className="form-control"
                                                        value={formValues.title}
                                                        onChange={handleChange}
                                                        required={true}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        value={formValues.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Place Made</label>
                                                    <input
                                                        type="text"
                                                        name="placeMade"
                                                        className="form-control"
                                                        value={formValues.placeMade}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Place Displayed</label>
                                                    <input
                                                        type="text"
                                                        name="placeDisplayed"
                                                        className="form-control"
                                                        value={formValues.placeDisplayed}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Artist</label>
                                                    <input
                                                        type="text"
                                                        name="artist"
                                                        className="form-control"
                                                        value={formValues.artist}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Manufacturer</label>
                                                    <input
                                                        type="text"
                                                        name="manufacturer"
                                                        className="form-control"
                                                        value={formValues.manufacturer}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Built by</label>
                                                    <input
                                                        type="text"
                                                        name="builtBy"
                                                        className="form-control"
                                                        value={formValues.builtBy}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label className="form-label">Description</label>
                                                    <input
                                                        type="text"
                                                        name="description"
                                                        className="form-control"
                                                        value={formValues.description}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Voice Description</label>
                                                    <input
                                                        type="text"
                                                        name="voiceDescription"
                                                        className="form-control"
                                                        value={formValues.voiceDescription}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Material</label>
                                                    <input
                                                        type="text"
                                                        name="material"
                                                        className="form-control"
                                                        value={formValues.material}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Classification</label>
                                                    <input
                                                        type="text"
                                                        name="classification"
                                                        className="form-control"
                                                        value={formValues.classification}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Category</label>
                                                    <input
                                                        type="text"
                                                        name="category"
                                                        className="form-control"
                                                        value={formValues.category}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Tags</label>
                                                    <input
                                                        type="select"
                                                        name="tags"
                                                        className="form-control"
                                                        value={formValues.tags}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Images</label>
                                                    <input
                                                        type="text"
                                                        name="images"
                                                        className="form-control"
                                                        value={formValues.images}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    {showGermanLang && (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    German
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    )}
                    {showHindiLang && (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Hindi
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Entry;
