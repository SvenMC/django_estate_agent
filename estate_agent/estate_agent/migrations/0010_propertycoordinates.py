# Generated by Django 4.2.9 on 2024-02-03 14:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('estate_agent', '0009_property_annual_service_charge_property_bathrooms_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PropertyCoordinates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.FloatField(default=None, null=True)),
                ('latitude', models.FloatField(default=None, null=True)),
                ('property', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='estate_agent.property')),
            ],
        ),
    ]
