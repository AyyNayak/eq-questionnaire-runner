import unittest
from unittest.mock import Mock
from wtforms.validators import StopValidation

from app.forms.error_messages import error_messages
from app.forms.validators import DateRequired


class TestDateRequiredValidator(unittest.TestCase):
    def test_date_required_empty(self):
        validator = DateRequired()

        mock_form = Mock()
        mock_form.day.data = ""
        mock_form.month.data = ""
        mock_form.year.data = ""

        mock_field = Mock()

        with self.assertRaises(StopValidation) as ite:
            validator(mock_form, mock_field)

        self.assertEqual(error_messages["MANDATORY_DATE"], str(ite.exception))

    def test_date_month_year_required_empty(self):
        validator = DateRequired()

        class TestMonthYearSpec:
            month = None
            year = None

        mock_form = Mock(spec=TestMonthYearSpec)
        mock_form.month.data = ""
        mock_form.year.data = ""
        mock_field = Mock()

        with self.assertRaises(StopValidation) as ite:
            validator(mock_form, mock_field)

        self.assertEqual(error_messages["MANDATORY_DATE"], str(ite.exception))

    def test_date_year_required_empty(self):
        validator = DateRequired()

        class TestYearSpec:
            year = None

        mock_form = Mock(spec=TestYearSpec)
        mock_form.year.data = ""
        mock_field = Mock()

        with self.assertRaises(StopValidation) as ite:
            validator(mock_form, mock_field)

        self.assertEqual(error_messages["MANDATORY_DATE"], str(ite.exception))

    def test_valid_date(self):

        validator = DateRequired()

        mock_form = Mock()
        mock_form.day.data = "01"
        mock_form.month.data = "01"
        mock_form.year.data = "2015"

        mock_field = Mock()

        try:
            validator(mock_form, mock_field)
        except StopValidation:
            self.fail("Valid date raised StopValidation")

    def test_valid_month_year(self):

        validator = DateRequired()

        mock_form = Mock()
        mock_form.month.data = "01"
        mock_form.year.data = "2017"

        mock_field = Mock()

        try:
            validator(mock_form, mock_field)
        except StopValidation:
            self.fail("Valid date raised StopValidation")

    def test_valid__year(self):

        validator = DateRequired()

        mock_form = Mock()
        mock_form.year.data = "2017"

        mock_field = Mock()

        try:
            validator(mock_form, mock_field)
        except StopValidation:
            self.fail("Valid date raised StopValidation")
