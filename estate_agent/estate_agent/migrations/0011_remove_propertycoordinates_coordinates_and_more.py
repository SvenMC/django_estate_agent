# Generated by Django 4.2.5 on 2024-01-29 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estate_agent', '0010_alter_propertycoordinates_property'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='propertycoordinates',
            name='coordinates',
        ),
        migrations.AddField(
            model_name='propertycoordinates',
            name='latitude',
            field=models.FloatField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='propertycoordinates',
            name='longitude',
            field=models.FloatField(default=None, null=True),
        ),
    ]
