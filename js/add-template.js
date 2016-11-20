let getElementFromTemplate = (templateHtml, templateClass, additionalClass) => {
  let template = document.createElement('section');
  template.classList.add('main');
  template.classList.add(templateClass);

  if (additionalClass) {
    template.classList.add(additionalClass);
  }

  template.innerHTML = templateHtml;
  return template;
};

export default getElementFromTemplate;
