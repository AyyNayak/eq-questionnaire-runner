# coding: utf-8
import re
from datetime import datetime

import flask
import flask_babel
from babel import numbers, units
from flask import current_app
from jinja2 import Markup, escape, evalcontextfilter

from app.questionnaire.rules import convert_to_datetime
from app.settings import MAX_NUMBER

blueprint = flask.Blueprint("filters", __name__)


@blueprint.app_template_filter()
def format_number(value):
    if value or value == 0:
        return numbers.format_decimal(value, locale=flask_babel.get_locale())

    return ""


def get_formatted_address(address_fields):
    address_fields.pop("uprn", None)
    return "<br>".join(address_field for address_field in address_fields.values())


def get_formatted_currency(value, currency="GBP"):
    if value or value == 0:
        return numbers.format_currency(
            number=value, currency=currency, locale=flask_babel.get_locale()
        )

    return ""


@blueprint.app_template_filter()
def get_currency_symbol(currency="GBP"):
    return numbers.get_currency_symbol(currency, locale=flask_babel.get_locale())


@blueprint.app_template_filter()
def format_percentage(value):
    return "{}%".format(value)


def format_unit(unit, value, length="short"):
    return units.format_unit(
        value=value,
        measurement_unit=unit,
        length=length,
        locale=flask_babel.get_locale(),
    )


def format_unit_input_label(unit, unit_length="short"):
    """
    This function is used to only get the unit of measurement text.  If the unit_length
    is long then only the plural form of the word is returned (e.g., Hours, Years, etc).

    :param (str) unit unit of measurement
    :param (str) unit_length length of unit text, can be one of short/long/narrow
    """
    if unit_length == "long":
        return units.format_unit(
            value=2,
            measurement_unit=unit,
            length=unit_length,
            locale=flask_babel.get_locale(),
        ).replace("2 ", "")
    return units.format_unit(
        value="",
        measurement_unit=unit,
        length=unit_length,
        locale=flask_babel.get_locale(),
    ).strip()


def format_duration(value):
    parts = []

    if "years" in value and (value["years"] > 0 or len(value) == 1):
        parts.append(
            flask_babel.ngettext("%(num)s year", "%(num)s years", value["years"])
        )
    if "months" in value and (
        value["months"] > 0
        or len(value) == 1
        or ("years" in value and value["years"] == 0)
    ):
        parts.append(
            flask_babel.ngettext("%(num)s month", "%(num)s months", value["months"])
        )
    return " ".join(parts)


def get_format_multilined_string(value):
    escaped_value = escape(value)
    new_line_regex = r"(?:\r\n|\r|\n)+"
    value_with_line_break_tag = re.sub(new_line_regex, "<br>", escaped_value)
    return "{}".format(value_with_line_break_tag)


def get_format_date(value):
    """Format a datetime string.

    :param (jinja2.nodes.EvalContext) context: Evaluation context.
    :param (any) value: Value representing a datetime.
    :returns (str): Formatted datetime.
    """
    value = value[0] if isinstance(value, list) else value
    date_format = "d MMMM yyyy"
    if value and re.match(r"\d{4}-\d{2}$", value):
        date_format = "MMMM yyyy"
    if value and re.match(r"\d{4}$", value):
        date_format = "yyyy"

    date_to_format = convert_to_datetime(value).date()
    result = "<span class='date'>{date}</span>".format(
        date=flask_babel.format_date(date_to_format, format=date_format)
    )

    return result


@evalcontextfilter
@blueprint.app_template_filter()
def format_datetime(context, value):
    london_date_time = datetime.strptime(value, "%Y-%m-%dT%H:%M:%S.%f")
    london_date = london_date_time.date()
    formatted_date = flask_babel.format_date(london_date, format="d MMMM yyyy")
    formatted_time = flask_babel.format_time(london_date_time, format="HH:mm")

    result = "<span class='date'>{date}</span>".format(
        date=flask_babel.gettext(
            "%(date)s at %(time)s", date=formatted_date, time=formatted_time
        )
    )
    return mark_safe(context, result)


def get_format_date_range(start_date, end_date):
    return flask_babel.gettext(
        "%(from_date)s to %(to_date)s",
        from_date=get_format_date(start_date),
        to_date=get_format_date(end_date),
    )


@blueprint.app_context_processor
def format_unit_processor():
    return dict(format_unit=format_unit)


@blueprint.app_context_processor
def format_unit_input_label_processor():
    return dict(format_unit_input_label=format_unit_input_label)


@blueprint.app_context_processor
def get_currency_symbol_processor():
    return dict(get_currency_symbol=get_currency_symbol)


def mark_safe(context, value):
    if context.autoescape:
        value = Markup(value)
    return value


@blueprint.app_template_filter()
def setAttribute(dictionary, key, value):
    dictionary[key] = value
    return dictionary


@blueprint.app_template_filter()
def setAttributes(dictionary, attributes):
    for key in attributes:
        dictionary[key] = attributes[key]
    return dictionary


@blueprint.app_template_filter()
def should_wrap_with_fieldset(question):
    answers = question["answers"]

    if len(answers) > 1 and not any(
        answer["type"] in {"Date", "MonthYearDate", "Duration"} for answer in answers
    ):
        return True

    return False


@blueprint.app_context_processor
def should_wrap_with_fieldset_processor():
    return {"should_wrap_with_fieldset": should_wrap_with_fieldset}


@blueprint.app_template_filter()
def get_width_class_for_number(answer):
    allowable_widths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]

    min_value = answer.get("minimum", {}).get("value", 0)
    max_value = answer.get("maximum", {}).get("value", MAX_NUMBER)

    min_value_width = len(str(min_value))
    max_value_width = len(str(max_value))

    width = min_value_width if min_value_width > max_value_width else max_value_width

    width += answer.get("decimal_places", 0)

    for allowable_width in allowable_widths:
        if width <= allowable_width:
            return f"input--w-{allowable_width}"


@blueprint.app_context_processor
def get_width_class_for_number_processor():
    return {"get_width_class_for_number": get_width_class_for_number}


class LabelConfig:
    def __init__(self, _for, text, description=None):
        self._for = _for
        self.text = text
        self.description = description


class CheckboxConfig:
    def __init__(self, option, index, form, answer):
        self.id = option.id
        self.name = option.name
        self.value = option.data
        self.checked = option.checked

        label_description = None
        answer_option = answer["options"][index]

        if answer_option and "description" in answer_option:
            label_description = answer_option["description"]

        self.label = LabelConfig(option.id, option.label.text, label_description)

        if option.detail_answer_id:
            detail_answer_field = form["fields"][option.detail_answer_id]
            detail_answer_schema = answer_option["detail_answer"]

            self.other = OtherConfig(detail_answer_field, detail_answer_schema)


class RadioConfig:
    def __init__(self, option, index, form, answer):
        self.id = option.id
        self.name = option.name
        self.value = option.data
        self.checked = option.checked

        label_description = None
        answer_option = answer["options"][index]

        if answer_option and "description" in answer_option:
            label_description = answer_option["description"]

        self.label = LabelConfig(option.id, option.label.text, label_description)

        if option.detail_answer_id:
            detail_answer_field = form["fields"][option.detail_answer_id]
            detail_answer_schema = answer_option["detail_answer"]

            self.other = OtherConfig(detail_answer_field, detail_answer_schema)


class RelationshipRadioConfig:
    def __init__(self, option, index, answer):
        self.id = option.id
        self.name = option.name
        self.value = option.data
        self.checked = option.checked

        label_description = None
        answer_option = answer["options"][index]

        if answer_option and "description" in answer_option:
            label_description = answer_option["description"]

        self.label = LabelConfig(option.id, option.label.text, label_description)

        if answer_option:
            # the 'pre-' prefix is added to the attributes here so that html minification
            # doesn't mess with the attribute contents (the 'pre-' is removed during minification).
            # see https://htmlmin.readthedocs.io/en/latest/quickstart.html
            attribute_key = (
                "pre-" if current_app.config["EQ_ENABLE_HTML_MINIFY"] else ""
            )

            self.attributes = {
                f"{attribute_key}data-title": escape(answer_option["title"]),
                f"{attribute_key}data-playback": escape(answer_option["playback"]),
            }


class OtherConfig:
    def __init__(self, detail_answer_field, detail_answer_schema):
        self.id = detail_answer_field.id
        self.name = detail_answer_field.name
        self.value = escape(
            detail_answer_field._value()
        )  # pylint: disable=protected-access
        self.label = LabelConfig(detail_answer_field.id, detail_answer_field.label.text)
        self.open = detail_answer_schema.get("visible", False)
        if detail_answer_schema["type"] == "Number":
            self.classes = get_width_class_for_number(detail_answer_schema)


@blueprint.app_template_filter()
def map_checkbox_config(form, answer):
    options = form["fields"][answer["id"]]

    return [CheckboxConfig(option, i, form, answer) for i, option in enumerate(options)]


@blueprint.app_context_processor
def map_checkbox_config_processor():
    return dict(map_checkbox_config=map_checkbox_config)


@blueprint.app_template_filter()
def map_radio_config(form, answer):
    options = form["fields"][answer["id"]]

    return [RadioConfig(option, i, form, answer) for i, option in enumerate(options)]


@blueprint.app_context_processor
def map_radio_config_processor():
    return dict(map_radio_config=map_radio_config)


@blueprint.app_template_filter()
def map_relationships_config(form, answer):
    options = form["fields"][answer["id"]]

    return [
        RelationshipRadioConfig(option, i, answer) for i, option in enumerate(options)
    ]


@blueprint.app_context_processor
def map_relationships_config_processor():
    return dict(map_relationships_config=map_relationships_config)


class SelectOptionConfig:
    def __init__(self, option, select):
        self.text = option[1]
        self.value = option[0]
        self.selected = select.data == self.value
        self.disabled = self.value == "" and select.flags.required


@blueprint.app_template_filter()
def map_select_config(select):
    return [SelectOptionConfig(tuple[1], select) for tuple in enumerate(select.choices)]


@blueprint.app_context_processor
def map_select_config_processor():
    return dict(map_select_config=map_select_config)


class SummaryAction:
    def __init__(
        self, block, answer, answer_title, edit_link_text, edit_link_aria_label
    ):
        self.text = edit_link_text
        self.ariaLabel = edit_link_aria_label + " " + answer_title
        self.url = block["link"] + "#" + answer["id"]

        self.attributes = {
            "data-qa": answer["id"] + "-edit",
            "data-ga": "click",
            "data-ga-category": "Summary",
            "data-ga-action": "Edit click",
        }


class SummaryRowItemValue:
    def __init__(self, text, other=None):
        self.text = text

        if other or other == 0:
            self.other = other


class SummaryRowItem:
    def __init__(  # noqa: C901, R0912 pylint: disable=too-complex, too-many-branches
        self,
        block,
        question,
        answer,
        multiple_answers,
        answers_are_editable,
        no_answer_provided,
        edit_link_text,
        edit_link_aria_label,
        summary_type,
    ):

        if "type" in answer:
            answer_type = answer["type"]
        else:
            answer_type = "calculated"

        if (
            (
                multiple_answers
                or answer_type == "relationship"
                or summary_type == "CalculatedSummary"
            )
            and "label" in answer
            and answer["label"]
        ):
            self.rowTitle = answer["label"]
            self.rowTitleAttributes = {"data-qa": answer["id"] + "-label"}
        else:
            self.rowTitle = question["title"]
            self.rowTitleAttributes = {"data-qa": question["id"]}

        value = answer["value"]

        self.attributes = {"data-qa": answer["id"]}

        if value is None or value == "":
            self.valueList = [SummaryRowItemValue(no_answer_provided)]
        elif answer_type == "address":
            self.valueList = [SummaryRowItemValue(get_formatted_address(value))]
        elif answer_type == "checkbox":
            self.valueList = [
                SummaryRowItemValue(option["label"], option["detail_answer_value"])
                for option in value
            ]
        elif answer_type == "currency":
            self.valueList = [
                SummaryRowItemValue(get_formatted_currency(value, answer["currency"]))
            ]
        elif answer_type in ["date", "monthyeardate", "yeardate"]:
            if question["type"] == "DateRange":
                self.valueList = [
                    SummaryRowItemValue(
                        get_format_date_range(value["from"], value["to"])
                    )
                ]
            else:
                self.valueList = [SummaryRowItemValue(get_format_date(value))]
        elif answer_type == "duration":
            self.valueList = [SummaryRowItemValue(format_duration(value))]
        elif answer_type == "number":
            self.valueList = [SummaryRowItemValue(format_number(value))]
        elif answer_type == "percentage":
            self.valueList = [SummaryRowItemValue(format_percentage(value))]
        elif answer_type == "radio":
            detail_answer_value = value["detail_answer_value"]
            self.valueList = [SummaryRowItemValue(value["label"], detail_answer_value)]
        elif answer_type == "textarea":
            self.valueList = [SummaryRowItemValue(get_format_multilined_string(value))]
        elif answer_type == "unit":
            self.valueList = [
                SummaryRowItemValue(
                    format_unit(answer["unit"], value, answer["unit_length"])
                )
            ]
        else:
            self.valueList = [SummaryRowItemValue(value)]

        if answers_are_editable:
            self.actions = [
                SummaryAction(
                    block, answer, self.rowTitle, edit_link_text, edit_link_aria_label
                )
            ]


class SummaryRow:
    def __init__(
        self,
        block,
        question,
        summary_type,
        answers_are_editable,
        no_answer_provided,
        edit_link_text,
        edit_link_aria_label,
    ):
        self.rowTitle = question["title"]
        self.rowItems = []

        multiple_answers = len(question["answers"]) > 1

        if summary_type == "CalculatedSummary" and not answers_are_editable:
            self.total = True

        for answer in question["answers"]:
            self.rowItems.append(
                SummaryRowItem(
                    block,
                    question,
                    answer,
                    multiple_answers,
                    answers_are_editable,
                    no_answer_provided,
                    edit_link_text,
                    edit_link_aria_label,
                    summary_type,
                )
            )


@blueprint.app_template_filter()
def map_summary_item_config(
    group,
    summary_type,
    answers_are_editable,
    no_answer_provided,
    edit_link_text,
    edit_link_aria_label,
    calculated_question,
):
    rows = []

    for block in group["blocks"]:
        rows.append(
            SummaryRow(
                block,
                block["question"],
                summary_type,
                answers_are_editable,
                no_answer_provided,
                edit_link_text,
                edit_link_aria_label,
            )
        )
        if summary_type == "CalculatedSummary":
            rows.append(
                SummaryRow(
                    block, calculated_question, summary_type, False, None, None, None
                )
            )

    return rows


@blueprint.app_context_processor
def map_summary_item_config_processor():
    return dict(map_summary_item_config=map_summary_item_config)


@blueprint.app_template_filter()
def map_list_collector_config(
    list_items,
    icon,
    edit_link_text=None,
    edit_link_aria_label=None,
    remove_link_text=None,
    remove_link_aria_label=None,
):
    rows = []

    for index, list_item in enumerate(list_items, start=1):
        item_name = list_item.get("item_title")

        actions = []

        if edit_link_text:
            actions.append(
                {
                    "text": edit_link_text,
                    "ariaLabel": edit_link_aria_label.format(item_name=item_name),
                    "url": list_item.get("edit_link"),
                    "attributes": {"data-qa": f"list-item-change-{index}-link"},
                }
            )

        if not list_item.get("primary_person") and remove_link_text:
            actions.append(
                {
                    "text": remove_link_text,
                    "ariaLabel": remove_link_aria_label.format(item_name=item_name),
                    "url": list_item.get("remove_link"),
                    "attributes": {"data-qa": f"list-item-remove-{index}-link"},
                }
            )

        rows.append(
            {
                "rowItems": [
                    {
                        "icon": icon,
                        "actions": actions,
                        "rowTitle": item_name,
                        "rowTitleAttributes": {"data-qa": f"list-item-{index}-label"},
                    }
                ]
            }
        )

    return rows


@blueprint.app_context_processor
def map_list_collector_config_processor():
    return dict(map_list_collector_config=map_list_collector_config)
